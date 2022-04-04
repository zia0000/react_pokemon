import { useState } from "react";
import "./App.css";

function Modal(props) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");

  return (
    <div className="modal-background" hidden={!props.ModalOpen}>
      <form
        className="modal"
        onSubmit={(event) => {
          event.preventDefault();
          props.onCreate({ name, content, img });
          props.setModelOpen(false);
        }}
      >
        <span className="modal-close" onClick={() => props.setModalOpen(false)}>
          ❌
        </span>
        <label htmlFor="name" className="label">
          Name
        </label>
        <imput
          id="name"
          type="text"
          placeholder="What kinda Pokémon?"
          className="input"
          maxLength="15"
          required
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="content" className="label">
          say something
        </label>
        <imput
          id="content"
          type="text"
          placeholder="about this pic.."
          className="input"
          maxLength="22"
          required
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <label htmlFor="img" className="label">
          img
        </label>
        <imput
          id="img"
          type="text"
          placeholder="URL"
          className="input"
          required
          value={img}
          onChange={(event) => {
            setImg(event.target.value);
          }}
        />
        <button type="submit" className="submit-button">
          save✅
        </button>
      </form>
    </div>
  );
}

function App() {
  const [mode, setMode] = useState([
    {
      name: "Pikachu",
      content: "nap time💤",
      img: "images/cutepokemonpic1.gif",
    },
    {
      name: "Togepi",
      content: "the laugh🥚",
      img: "images/cutepokemonpic2.gif",
    },
    {
      name: "Espeon",
      content: "run like the evee🔮",
      img: "images/cutepokemonpic3.gif",
    },
    {
      name: "Pachirisu",
      content: "MUA 💕",
      img: "images/cutepokemonpic4.gif",
    },
  ]);

  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header>
        <span className="title">Pokemon</span>
      </header>
      <main>
        <div className="sidebar">
          <button
            type="button"
            className="add-button"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            ADD
          </button>
          {mode.map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
        </div>
        <article className="article">
          {mode.map((item) => (
            <section className="mode" key={item.name}>
              <img src={item.img} alt={item.name}></img>
              <span>{item.content}</span>
            </section>
          ))}
        </article>
      </main>
      <Modal
        onCreate={(item) => {
          setMode([...setMode, item]);
        }}
        ModalOpen={ModalOpen}
        setModalOpen={setModalOpen}
      ></Modal>
    </>
  );
}

export default App;
