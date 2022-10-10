const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

// ctx = context
// 상수를 사용해 캔버스의 크기를 조절한다.

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.heigth = COLS * BLOCK_SIZE;

// 블록의 사이즈를 변경한다.
// scale 함수를 사용하면 매번 BLOCK_SIZE 로 계산할 필요가 없이 블록의 크기를 1로 취급할 수 있어 코드를 단순화할 수 있다.

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);