
import { HeroSection } from "./HeroSection";


export default function HomeMain() {
  return (
    <div className="w-full">
       <img
        src="/images/home/wave.gif" 
        alt="Decorative animation"
        className=" h-auto w-full"
      />
      
      <HeroSection/>

      {/* <Container>
        <CardLayout image="/images/home/camera-1.jpg">
          <CardTitlte title="DOME CAMERAS" />
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            est voluptate deserunt incidunt ab doloribus hic sint voluptatem
            exercitationem ad quod praesentium nobis consectetur nam quae sit
            architecto, quidem laboriosam provident veniam, enim, dolorem
            officia dignissimos quia? Harum impedit corporis deleniti sed
            mollitia reprehenderit dicta at iure, quibusdam soluta iusto magnam
            praesentium quos quaerat atque, ullam, beatae officia perferendis
            excepturi debitis neque. Vel repellat architecto, iste
          </Description>
          <Button href="/">LEARN MORE</Button>
        </CardLayout>
        <div className="flex justify-center items-center gap-2">
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
        </div>
        <CardLayout isLeft={true} image="/images/home/router-1.jpg">
          <CardTitlte title="In-wall wifi Access points" />

          <Description>
            Protruding less than 1” from the wall, our WiFi 6 in-wall access
            points are as powerful as they are unobtrusive. Additionally, 4
            built-in gigabit ethernet ports enable hard-wired connections for
            non-WiFi-optimized devices.
          </Description>
          <Button href="/">LEARN MORE</Button>
        </CardLayout>
      </Container> */}
    </div>
  );
}
