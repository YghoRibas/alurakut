import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

function ProfileSideBar(properties) {
  return (
    <Box>
      <img style={{
        borderRadius: '8px',
        width: '121px',
        height: '121px'
      }} src={`https://github.com/${properties.githubUser}.png`} />
      <ProfileContent>
        <h6>  </h6>
        <p>A simple description with linebreaks</p>
      </ProfileContent>
      <ProfileContent>
        <ProfileUlDesign>
          <li><Links href="#">Perfil</Links></li>
          <li><Links href="#">RecLinksdos</Links></li>
          <li><Links href="#">Fotos</Links></li>
          <li><Links href="#">Vídeos</Links></li>
          <li><Links href="#">Depoimentos</Links></li>
        </ProfileUlDesign>
      </ProfileContent>
    </Box>
  );
}

const ProfileContent = styled.div`
  border-top: 1px solid #ECF2FA;
  padding:16px;
`

const ProfileUlDesign = styled.ul`
  list-style-type: none;
`

const Links = styled.a`
  font-family: Rubik;
  text-decoration: none;
  color: #2E7BB4;
  font-weight: 400;
  font-size: 12px;
`

export default function Home() {

  const githubUser = 'YghoRibas';
  const persons = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="feedArea" style={{ gridArea: "feedArea" }}>
          <Box> 
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet/>
            </Box>
        </div>
        <div className="comunityArea" style={{ gridArea: "comunityArea" }}>
          <Box >
            <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle"> Pessoas Favoritas ({persons.length})</h2>
              <ul>
                {persons.map((itemAtual) => {
                  return (
                    <li>
                      <Links href={`/users/${itemAtual}`} key={itemAtual}>
                        <img src={`https://github.com/${itemAtual}.png`} />
                        <span>{itemAtual}</span>
                      </Links>
                    </li>
                  )
                })}
              </ul> 
              </ProfileRelationsBoxWrapper>
            </Box>
          <Box > Comunidades </Box>
        </div>
      </MainGrid>
    </>
  )
}
