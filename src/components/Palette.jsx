import React from 'react';
import PropTypes from 'prop-types';

const Palette = ({ palette, paletteColor, chooseColor }) => {
	return (
		<div className='palette-container'>
			{palette.map(
				(e) =>
					paletteColor === e.color ? (
						<div
							key={e.id}
							style={{ backgroundColor: e.color }}
							onClick={() => chooseColor(e.color)}
							aria-hidden
						/>
					) : (
						<div
							key={e.id}
							style={{
								backgroundColor: e.color,
								transform: 'translateY(10px)'
							}}
							onClick={() => chooseColor(e.color)}
							aria-hidden
						/>
					)
			)}
		</div>
	);
};

Palette.propTypes = {
	palette: PropTypes.arrayOf(
		PropTypes.shape({
			color: PropTypes.string,
			id: PropTypes.string
		})
	).isRequired,
	paletteColor: PropTypes.string.isRequired,
	chooseColor: PropTypes.func.isRequired
};
export default Palette;
