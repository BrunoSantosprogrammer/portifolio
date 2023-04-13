import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { Asidebar, Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <Asidebar>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={19}>Bruno Santos</Title>
      <Paragrafo tipo="secundario" fontSize={14}>
        brunosantosprogrammer
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Estudante Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </Asidebar>
)

export default Sidebar
