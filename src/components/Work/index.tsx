import { Container, Image } from "react-bootstrap";
import "./work.sass";
const index = () => {
  console.log(process.env.END_POINT);
  return (
    <Container>
      <div className="inside__border">
        <h1 className="text-center my-5">Work History</h1>
        <div className="dropoutdevs workplace">
          <Image src="/assets/dropoutdevs.svg" width="100px" />
          <div className="description">
            <div className="line">
              <span>Company: </span> DropoutDevs
            </div>
            <div className="line">
              <span>Nature of the company: </span> Startup
            </div>
            <div className="line">
              <span>Duration of work: </span> 1 Year 8 Monhts
            </div>
            <div className="line">
              <span>Role: </span> Software Engineer/ UIUX
            </div>
            <div className="line">
              <span>Location of company: </span> Srinagar J&K
            </div>
            <div className="line">
              <span>Work type: </span> onsite
            </div>
            <div className="line">
              <span>Timeframe: </span> June 2020 - Jan 2022
            </div>
            <div className="line">
              <span>website: </span>{" "}
              <a href="https://dropoutdevs.com">DROPOUTDEVS</a>
            </div>
          </div>
        </div>
        <div className=" workplace">
          <Image src="/assets/saiz.svg" width="100px" />
          <div className="description">
            <div className="line">
              <span>Company: </span> SAIZ
            </div>
            <div className="line">
              <span>Nature of the company: </span> Startup
            </div>
            <div className="line">
              <span>Duration of work: </span> 8 Monhts
            </div>
            <div className="line">
              <span>Role: </span> Software Engineer/ UIUX
            </div>
            <div className="line">
              <span>Location of company: </span> Berlin, Germany
            </div>
            <div className="line">
              <span>Work type: </span> Remote
            </div>
            <div className="line">
              <span>Timeframe: </span> Feb 2022 - September 2022
            </div>
            <div className="line">
              <span>website: </span> <a href="https://saiz.io">SAIZ</a>
            </div>
          </div>
        </div>
        <div className="workplace">
          <Image src="/assets/dmis.svg" width="100px" />
          <div className="description">
            <div className="line">
              <span>Company: </span> DMIS
            </div>
            <div className="line">
              <span>Nature of the company: </span> Startup
            </div>
            <div className="line">
              <span>Duration of work: </span> 6 Monhts
            </div>
            <div className="line">
              <span>Role: </span> Frontend Engineer
            </div>
            <div className="line">
              <span>Location of company: </span> Seattle USA
            </div>
            <div className="line">
              <span>Work type: </span> Remote
            </div>
            <div className="line">
              <span>Timeframe: </span> September 2022 - Current
            </div>
            <div className="line">
              <span>website: </span> <a href="https://dmis211.com">DMIS</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default index;
