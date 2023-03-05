import "../App.css";

const High = (props) => {

  let d = new Date();
  if (props.work) {
    for (let index = 0; index < props.work.length; index++) {
      const element = props.work[index];
      let cd = new Date(element.date);

      setTimeout(() => {
        if (

          (d.getDate() === cd.getDate() + 1 || d.getDate() > cd.getDate() + 1) &&
          d.getMonth() === cd.getMonth() &&
          d.getFullYear() === cd.getFullYear()
        ) {

          document.getElementById(element.title).classList.add("red");
        }
        if (
          cd.getDate() + 1 - d.getDate() >= 1 &&
          cd.getDate() + 1 - d.getDate() <= 3 &&
          d.getMonth() === cd.getMonth() &&
          d.getFullYear() === cd.getFullYear()
        ) {

          document.getElementById(element.title).classList.add("orange");
        }
      }, 1000);
    }
  }

};

export default High;
