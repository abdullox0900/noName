import { Container } from '../Container/Container'
import HeaderSearch from './HeaderSearch/HeaderSearch'
import { HeaderLogo, HeaderWrap, HeaderWrapTop } from './Style'

function Header() {
	return (
		<HeaderWrap>
			<Container>
                <HeaderWrapTop>
                    <HeaderLogo />
					<HeaderSearch />
				</HeaderWrapTop>
			</Container>
		</HeaderWrap>
	)
}

export default Header
