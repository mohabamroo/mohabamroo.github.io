/* eslint-disable react/react-in-jsx-scope */
import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';

export default function BrandHeader(props) {
	return (
		<Header
			rightLinks={<HeaderLinks />}
			fixed
			color="transparent"
			changeColorOnScroll={{
				height: 400,
				color: 'dark',
			}}
			{...props}
		/>
	);
}
