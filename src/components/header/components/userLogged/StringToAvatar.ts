function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stringAvatar(
  name: string,
  lastname: string
): { children: string; sx: { bgcolor: string } } {
  return {
    sx: {
      bgcolor: randomColor(),
    },
    children: `${name.charAt(0)}${lastname.charAt(0)}`,
  };
}

export default stringAvatar;
