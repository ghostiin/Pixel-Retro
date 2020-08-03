import React from 'react';
import styled from 'styled-components/macro';
import style from '../theme';

const TopWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 5px 10px;

	& > span {
		font-size: ${style.fontSize.ll};
		font-weight: 700;

		&.iconfont {
			${style.extendClick};
			font-size: 25px;
		}
	}
`;

const Top = () => {
	return (
		<TopWrapper>
			<span className='iconfont'>&#xe67e;</span>
			<span>PIXEL RETRO</span>
			<span className='iconfont'>&#xe600;</span>
		</TopWrapper>
	);
};

export default Top;
