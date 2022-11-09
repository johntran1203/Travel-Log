import doge from "../images/doge.jpeg";
import block from "../images/block.jpeg";
import disneyland from "../images/disneyland.jpeg";
import edc from "../images/edc.jpg";
import sf from "../images/sf.jpg";
import tree from "../images/tree.jpg";
import zoo from "../images/zoo.jpg";
import "../index.css";

const Home = () => {
  return (
    <div>
      <div className="header">
        <h1 className="title">John's Travel Log</h1>
        <div className="intro">
          <img src={doge} alt="dog" className="grid-item dog"  />

          <h2 className="grid-item">Look at this awsome Dog!!! That's my boy.</h2>
        </div>
      </div>
      <h3>Info:</h3>
      <p>
        Hello my name is John Tran and welcome to my Travel Log. These are all
        the place I have been and would recommend others to check out.
      </p>
      <p>
        I started this travel log to keep friends and family up-to-date on what
        I have been up to.
      </p>
      <div className="destinations">
        <div className="destination">
          <h3>The Block (outlet)</h3>
          <img src={block} alt="the outlet" className="pic" />
          <p>
            The Outlets at Orange (former names The Block at Orange and The City
            Shopping Center) is an open-air outlet mall in the city of Orange,
            California in central Orange County. If you want affordable name
            brand clothing this is the best outlet in OC.
          </p>
        </div>
        <div className="destination">
          <h3>Las Vegas EDC</h3>
          <img src={edc} alt="edc" className="pic" />
          <p>
            Electric Daisy Carnival, commonly known as EDC, is an electronic
            dance music festival organized by promoter and distributor
            Insomniac. The annual flagship event, EDC Las Vegas, is held in May
            at the Las Vegas Motor Speedway, and is currently the largest
            electronic dance music festival in North America. If you love EDM
            music you should check this festival.
          </p>
        </div>
        <div className="destination">
          <h3>San Francisco</h3>
          <img src={sf} alt="sf" className="pic" />
          <p>
            San Francisco, officially the City and County of San Francisco, is
            the commercial, financial, and cultural center of Northern
            California. The city proper is the fourth most populous in
            California and 17th most populous in the United States.
          </p>
        </div>
        <div className="destination">
          <h3>Joshua Tree</h3>
          <img src={tree} alt="joshua tree" className="pic" />
          <p>
            Joshua Tree National Park is a vast protected area in southern
            California. It's characterized by rugged rock formations and stark
            desert landscapes. Named for the region’s twisted, bristled Joshua
            trees, the park straddles the cactus-dotted Colorado Desert and the
            Mojave Desert, which is higher and cooler. Keys View looks out over
            the Coachella Valley. Hiking trails weave through the boulders of
            Hidden Valley
          </p>
        </div>
        <div className="destination">
          <h3>San Deigo Zoo</h3>
          <img src={zoo} alt="zoo" className="pic" />
          <p>
            The San Diego Zoo is a zoo in Balboa Park, San Diego, California,
            housing 4000 animals of more than 650 species and subspecies on 100
            acres of Balboa Park leased from the City of San Diego.
          </p>
        </div>
        <div className="destination">
          <h3>Disneyland</h3>
          <img src={disneyland} alt="disneyland" className="pic" />
          <p>
            Happiest place on Earth. Everyone should visit this place at least
            once. Lines are long but worth it for some people. Disneyland is a
            theme park in Anaheim, California. Opened in 1955, it was the first
            theme park opened by the The Walt Disney Company and the only one
            designed and constructed under the direct supervision of Walt
            Disney.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
