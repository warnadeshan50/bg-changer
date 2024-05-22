import '../../assets/css/background.css'

export default function Button(prop: any) {
  function setTheme() { 
    console.log("clicked me");
    console.log(prop.btnID);
    const element = document.getElementById('display');
    element.style.background=prop.btnID;

  }

  return (
    <>
      <button
        id={prop.btnId}
        onClick={setTheme}
        className={`h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 ${prop.bgColor} rounded-lg focus:shadow-outline ${prop.hoverColor}`}
      >
        {prop.btnColorName}
      </button>
    </>
  );
}
