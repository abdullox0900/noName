import { HeaderSearchInput, HeaderSearchWrap, SearchBtn } from './Style'

function HeaderSearch() {
	return (
		<>
			<HeaderSearchWrap>
				<HeaderSearchInput placeholder='Search..' />
				<SearchBtn>Найти</SearchBtn>
			</HeaderSearchWrap>
		</>
	)
}

export default HeaderSearch
