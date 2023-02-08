import Link from 'next/link'

function Page() {
	return (
		<>
			<Link href={'/'}>Home</Link>
			<Link href={'/about'}>About</Link>
			<Link href={'/article'}>Article</Link>
			<Link href={'/blog'}>blog</Link>
			<Link href={'/brand_page'}>Brand Page</Link>
			<Link href={'/brands'}>Brands</Link>
			<Link href={'/cabinet'}>Cabinet</Link>
			<Link href={'/catalog'}>Catalog</Link>
			<Link href={'/category'}>Category</Link>
			<Link href={'/compare'}>Compare</Link>
			<Link href={'/order'}>Order</Link>
			<Link href={'/sing_in'}>Sing In</Link>
			<Link href={'/sing_up'}>Sing Up</Link>
		</>
	)
}

export default Page
