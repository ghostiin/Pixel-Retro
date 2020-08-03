import React, { forwardRef, useEffect, useState, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';

const Scroll = forwardRef((props, ref) => {
	// 存放better-scroll的Bscroll实例
	const [ bScroll, setBscroll ] = useState();
	const wrapperRef = useRef();
	const { direction, mouseWheel, click, refresh } = props; // value
	useEffect(() => {
		const scroll = new BScroll(wrapperRef.current, {
			scrollX: direction === 'horizontal', // 如果direction = h 设为true
			scrollY: direction === 'vertical', // 如果direction =v 设为true
			probeType: 3, // 实时派发scroll事件
			click, // 开启点击
			mouseWheel // 开启鼠标滑轮
			// wheel: true,
			// scrollbar: true
		});
		setBscroll(scroll);
		return () => {
			// 退出时删除实例
			setBscroll(null);
		};
	}, []);

	// 每次重新渲染都刷新Bscroll实例
	// refresh()
	// 重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
	useEffect(() => {
		if (refresh && bScroll) {
			bScroll.refresh();
		}
	});

	useImperativeHandle(ref, () => ({
		// 父组件可手动调用refresh
		refresh(x = 0, y = 0) {
			if (bScroll) {
				bScroll.refresh();
				bScroll.scrollTo(x, y);
			}
		},
		// 父组件获取bscroll实例
		getBscroll() {
			if (bScroll) return bScroll;
			return null;
		}
	}));

	return (
		<div className='scroll-inner-container' ref={wrapperRef}>
			{props.children}
		</div>
	);
});

Scroll.propTypes = {
	direction: PropTypes.oneOf([ 'vertical', 'horizental' ]), // 滚动的方向
	click: true, // 是否支持点击
	mouseWheel: PropTypes.bool, // 是否开启鼠标滑动支持 默认开启
	refresh: PropTypes.bool, // 是否刷新
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ]).isRequired
};

Scroll.defaultProps = {
	direction: 'vertical',
	click: true,
	mouseWheel: false,
	refresh: true
};

export default Scroll;
