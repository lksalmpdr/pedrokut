import React from 'react';
import { Box, MainGrid } from '../src/components';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault } from '../src/lib';
import {ProfileRelationsBoxWrapper} from '../src/components';
import { OrkutNostalgicIconSet } from '../src/lib';

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

export default function Home() {
  const comunidadeInicial = {
    id: new Date().toISOString(),
    title: 'Eu odeio Acordar Cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }
  const [comunidades, setComunidades] = React.useState([comunidadeInicial]);
  
  const usuarioGitHub = 'omariosouto';

  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]
  // const comunidades = [
  //   'juunegreiros', 
  //   'omariosouto',
  //   'peas',
  //   'rafaballerini',
  //   'marcobrunodev',
  //   'felipefialho'
  // ]

  return(
    <>
    <AlurakutMenu />
    {/*o que é preciso passar no AlurakutMenu para ele ter imagem*/ }
    <MainGrid>
      {/**transformar em aside */}
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
          <form onSubmit={(event)=>{
            event.preventDefault();

            const dadosForm = new FormData(event.target);

            const novaComunidade = {
              id : new Date().toISOString(),
              title: dadosForm.get('title'),
              image: dadosForm.get('image')
            }
            
            const comunidadesAtualizadas = [...comunidades, novaComunidade];

            setComunidades(comunidadesAtualizadas);
          }}>
            <div>
              <input 
                placeholder='Qual cai ser o nome da sua comunidade?' 
                name='title'
                aria-label='Qual cai ser o nome da sua comunidade?'
                type='text'
              />
            </div>
            <div>
              <input 
                placeholder='Coloque uma URL de imagem para ser a capa' 
                name='image'
                aria-label='Coloque uma URL de imagem para ser a capa'
                type='text'
              />
            </div>
            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      <div className='profileRelationshipsArea' style={{gridArea : 'profileRelationshipsArea'}}>
      
      {/**fazer componente e não deixar passar de 6 elementos exibidos, mesmo que o contador exiba mais */}
      <ProfileRelationsBoxWrapper>
          <h2 className='smallTitle'>Comunidades({comunidades.length})</h2>
        
          <ul>
          {
            comunidades.map((cmn)=>{
              return(
                <li key={`comunidade_card_${cmn.id}`}>
                  <a href={`/users/${cmn.title}`} key={cmn.title}>
                    <img src={cmn.image? cmn.image : `http://placehold.it/300x300`} />
                    <span>{cmn.title}</span>
                  </a>
                </li>
              );
            })
          }
          </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className='smallTitle'>Pessoas da Comunidade({pessoasFavoritas.length})</h2>
        
          <ul>
          {
            pessoasFavoritas.map(pessoa=>{
              return(
                <li key={`pessoa_card_${pessoa}`}>
                  <a href={`/users/${pessoa}`} key={pessoa}>
                    <img src={`https://github.com/${pessoa}.png`} />
                    <span>{pessoa}</span>
                  </a>
                </li>
              );
            })
          }
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
  </>
  )

}
