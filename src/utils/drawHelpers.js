const posToId = (posX, posY, canvas, rows, columns) => {
	const id = posX + columns * posY;
	return id < canvas.length && posX >= 0 && posX < columns && posY < rows && posY >= 0 ? id : null;
};
const touchToId = (ev, columns, rows, canvas, grid) => {
	// console.log('ev.targetTouches', ev.targetTouches[0]);
	// radiusX/Y 能够包围用户和触摸平面的接触面的最小椭圆的水平轴(X轴)半径.
	const { radiusX, radiusY, clientX, clientY } = ev.targetTouches[0];
	const { x, y, width, height } = grid; // 这个canvas处于的位置
	// 计算此时的xy处在二维坐标的哪一格
	const posX = Math.abs(Math.floor((clientX - x - radiusX) / width * columns));
	const posY = Math.abs(Math.floor((clientY - y - radiusY) / height * rows));
	return posToId(posX, posY, canvas, rows, columns);
};

export default touchToId;
