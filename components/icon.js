const Icon = ({ icon, onClick }) => {
  const icons = {
    check: "M864 128l-480 480-224-224-160 160 384 384 640-640z",
    trash:
      "M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z",
  }
  return (
    <svg
      className="fill-blue-300 hover:fill-blue-500 cursor-pointer"
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 1024 1024"
    >
      <path d={icons[icon]}></path>
    </svg>
  )
}

export default Icon
