import doge from "../images/doge.jpeg";
import block from "../images/block.jpeg"
import disneyland from "../images/disneyland.jpeg"

const About = () => {
  return (
    <div>
      <div>
        <h1>John's Travel Log</h1>
        <img src={doge} alt="dog" />
        <p>Look at this awsome Dog!!! That's my boy.</p>
      </div>
      <div>
        <div>
            <h3>The Block (outlet)</h3>
            <img src={block} alt='the outlet' />
            <p>If you want affordable name brand clothing this is the best outlet in OC</p>
        </div>
        <div>
            <h3>Disneyland</h3>
            <img src={disneyland} alt='disneyland' />
            <p>Happiest place on Earth.  Everyone should visit this place at least once. Lines are long but worth it for some people.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
