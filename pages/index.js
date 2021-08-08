import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

import { Box, MainGrid } from '../src/components';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault } from '../src/lib';
import { ProfileRelationsBoxWrapper } from '../src/components';
import { OrkutNostalgicIconSet } from '../src/lib';
import useForm from '../hooks/useForm';


const ProfileSideBar = ({user}) =>{
  return(
    <Box>
        <img src={`https://github.com/${user}.png`} style={{borderRadius: '8px'}} />
        <hr />
        <p>
          <a className="boxLink" href={`http://github.com/${user}`}>
          {user}
          </a>
        </p>
        <hr />
        <AlurakutProfileSidebarMenuDefault />
      </Box>
  );
}

const AfinityBox = ({title, entities}) =>
{
  return(
    <ProfileRelationsBoxWrapper>
      <h2 className='smallTitle'>{title}({entities.length || 0})</h2>

      <ul>
            {
              entities.slice(0,6).map((entity)=>{
                  if(entity.hasOwnProperty('login')){
                    return(<li key={`person_card_${entity.login}`}>
                        <a href={`/users/${entity.login}`} key={entity.id}>
                          <img src={`${entity.avatar_url}`} />
                          <span>{entity.login}</span>
                        </a>
                      </li>);
                  }else{
                    return(<li key={`community_card_${entity.id}`}>
                        <a href={`/communities/${entity.title}`} 
                          key={`image_community_${entity.title}`}>
                          <img src={entity.imageurl? entity.imageurl : `http://placehold.it/300x300`} />
                          <span>{entity.title}</span>
                        </a>
                      </li>);
                      }
                })
              }
      </ul>


    </ProfileRelationsBoxWrapper>
            )
}

export default function Home(props) {
  props.redirect ? window.redirect(props.redirect):null;

  const usuarioGitHub = props.githubUser;
  
  const [comunidades, setComunidades] = React.useState([{}]);
  
  const { handleChange, values, clearForm } = useForm({title : '', image : ''});

  const [seguidores, setSeguidores] = React.useState([]);

  const handleSubmit = (event) =>
  {
    event.preventDefault();

    const dadosForm = new FormData(event.target);

    const novaComunidade = {
      title: dadosForm.get('title'),
      imageurl: dadosForm.get('image'),
      creatorslug: usuarioGitHub
    }
    const configNovaComunidade = {
      method: 'POST',
      body: JSON.stringify(novaComunidade),
      headers:{
        'Content-Type' : 'application/json'
      }
    };

    fetch('/api/comunidades', configNovaComunidade)
      .then(async (response)=>{
        const dados = await response.json();
        const comunidadesAtualizadas = [...comunidades, dados.createdRecord];
        setComunidades(comunidadesAtualizadas);
        clearForm();

      });
    
  }

  React.useEffect(()=>{
    fetch(`https://api.github.com/users/${usuarioGitHub}/followers`)
    .then((res)=>{
      if(res.ok){
        return res.json();
      }
      throw new Error('Não foi possível carregar os seguidores');
    })
    .then((res)=>{
      setSeguidores(res)
    });

    //API GraphQL DatoCMS
    const datoCMSConfig = {
      method: 'post',
      headers: {
        'Authorization' : '', //DATO key, read-only
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
      },
      body: JSON.stringify({"query" : `query {
        allCommunities {
          id
          title
          imageurl
          creatorslug
        }
      }`}) 
    };

    fetch(`https://graphql.datocms.com/`, datoCMSConfig)
    .then( ( response ) => response.json() )
    .then( (response)=>{
      const resComunidades = response.data.allCommunities;
      setComunidades(resComunidades);
    });
  }, []);

  return(
    <>
    <AlurakutMenu githubUser={usuarioGitHub} />
    <MainGrid>
      <div className='profileArea' style={{gridArea : 'profileArea'}}>
        <ProfileSideBar user={usuarioGitHub} />
        
      </div>
      <div className='postsArea' style={{gridArea : 'postsArea'}}>    
        <Box>
          <h1 className='title'>Bem-vindo</h1>
          <OrkutNostalgicIconSet />
        </Box>
        <Box>
          <h2 className='subTitle'>O que você deseja fazer?</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input 
                placeholder='Qual vai ser o nome da sua comunidade?' 
                name='title'
                aria-label='Qual vai ser o nome da sua comunidade?'
                type='text'
                value={values.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <input 
                placeholder='Coloque uma URL de imagem para ser a capa' 
                name='image'
                aria-label='Coloque uma URL de imagem para ser a capa'
                type='text'
                value={values.image}
                onChange={handleChange}
              />
            </div>
            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      <div className='profileRelationshipsArea' style={{gridArea : 'profileRelationshipsArea'}}>
      
      <AfinityBox title="Comunidades" entities={comunidades} />
      <hr></hr>
      <AfinityBox title="Pessoas da Comunidade" entities={seguidores} />
      </div>
    </MainGrid>
  </>
  )

}

export async function getServerSideProps(context)
{
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  
  const { isAuthenticated } = await fetch("https://alurakut.vercel.app/api/auth", {
    headers:{
      'Authorization' : token
    }
  })
  .then(response=> response.json())

  if(!isAuthenticated){
    return {
        props:
          {
            redirect : '/login?try=true',
            permanent : false
          }
    }
  }
  
  const { githubUser } = jwt.decode(token);
  return {
    props : {
      githubUser : githubUser
    }
  }
}