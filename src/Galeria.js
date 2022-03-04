import React from "react";
import Kartya from "./Kartya";

const kartyak = [
  {
    cim: "Koala",
    link: "./kepek/kep1.jpg",
    leiras: "Ez egy Koala.",
  },
  {
    cim: "Róka",
    link: "./kepek/kep2.jpg",
    leiras: "Ez egy róka.",
  },
  {
    cim: "Tigris",
    link: "./kepek/kep3.jpg",
    leiras: "Ez egy tigris.",
  },
  {
    cim: "Maci",
    link: "./kepek/kep4.jpg",
    leiras: "Ez egy mosómaci.",
  },
  {
    cim: "Koala",
    link: "./kepek/kep1.jpg",
    leiras: "Ez egy Koala.",
  },
  {
    cim: "Róka",
    link: "./kepek/kep2.jpg",
    leiras: "Ez egy róka.",
  },
  {
    cim: "Tigris",
    link: "./kepek/kep3.jpg",
    leiras: "Ez egy tigris.",
  },
  {
    cim: "Maci",
    link: "./kepek/kep4.jpg",
    leiras: "Ez egy mosómaci.",
  },
  {
    cim: "Koala",
    link: "./kepek/kep1.jpg",
    leiras: "Ez egy Koala.",
  },
  {
    cim: "Róka",
    link: "./kepek/kep2.jpg",
    leiras: "Ez egy róka.",
  },
  {
    cim: "Tigris",
    link: "./kepek/kep3.jpg",
    leiras: "Ez egy tigris.",
  },
  {
    cim: "Maci",
    link: "./kepek/kep4.jpg",
    leiras: "Ez egy mosómaci.",
  },
];

class Galeria extends React.Component {
  state = {
    aktKep: 0,
  };

  aktualisKep = (id) => {
    console.log("galériában " + id);
    this.setState({
      aktKep: id,
    });
  };

  balra = () => {
    if (this.state.aktKep > 0) {
      this.setState({
        aktKep: this.state.aktKep - 1,
      });
    } else {
      this.setState({
        aktKep: kartyak.length - 1,
      });
    }
  };

  jobbra = () => {
    if (this.state.aktKep != kartyak.length - 1) {
      this.setState({
        aktKep: this.state.aktKep + 1,
      });
    } else {
      this.setState({
        aktKep: 0,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="nagyKep">
          <button onClick={this.balra}>{`<<`}</button>
          <img src={kartyak[this.state.aktKep].link}></img>
          <button onClick={this.jobbra}>{`>>`}</button>
        </div>

        <div className="kisKartyak">
          {kartyak.map((elem, index) => {
            elem.id = index;
            return <Kartya kep={elem} aktKep={this.aktualisKep} key={index} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Galeria;
