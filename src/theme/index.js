const shades = [
	'#000B0F',
	'#031221',
	'#081230',
	'#0B0B3F',
	'#231451',
	'#401F60',
	'#5F2B70',
	'#823B82',
	'#914D80',
	'#A35D80',
	'#B27080',
	'#C18989',
	'#CEACA1',
	'#DDCAB8',
	'#EFE9D7',
	'#F9F9F2'
];
// 单行文字溢出用...替换
const noWrap = () => {
	return `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `;
};

const extendClick = () => {
	return `
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: -10px; bottom: -10px; left: -10px; right: -10px;
      };
    `;
};

export default {
	shades,
	noWrap,
	fontSize: {
		ss: '10px',
		s: '12px',
		m: '14px',
		l: '16px',
		ll: '18px'
	},
	color: {
		bg: shades[1],
		font: 'rgb(114, 173, 140)',
		fontSub: 'rgb(77, 115, 170)'
	},
	extendClick
};
