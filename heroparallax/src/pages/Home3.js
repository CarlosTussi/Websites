import Plx from "react-plx";
import './Home3.css';

const leftSquare = [
    {
        start: 0,
        end: 300,
        properties: [
            {
                startValue: 0,
                endValue: 40,
                unit: "vw",
                property: "translateX"
            }
        ]
    }
]

const rightSquare = [
    {
        start: 0,
        end: 300,
        properties: [
            {
                startValue: 0,
                endValue: -40,
                unit: "vw",
                property: "translateX"
            }
        ]
    }
]

const title = [
    {
      start: 0,  //when effect will  start
      duration: 300, //when effect will end
      properties: [
        {
            startValue: 0,
            endValue: 1.5,
            property: "opacity",
          },
          {
            startValue: 1,
            endValue: 2.5,
            unit: "em",
            property: "fontSize",
          },
      ],
    },
  ];

function Home3()
{
    return(
        <div className="home3">
            <div className="home3-container">            
            <Plx  parallaxData={rightSquare}>
                <div className="square1"></div>
            </Plx>
            <Plx parallaxData={leftSquare}>
                <div className="square2"/>       
            </Plx>
            </div>     
            <Plx className="h1-container" parallaxData={title}>
                <h1>Hello World</h1>
            </Plx>     
            <>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni exercitationem libero asperiores nemo debitis voluptate, dolorum molestiae praesentium sint alias, quos quae, unde earum neque quasi pariatur accusamus sunt hic mollitia obcaecati at! Et, dolorum. Provident voluptatum dolorum consequatur, ea, possimus numquam maxime ad veritatis deserunt voluptatibus tempora, esse ipsum cumque officia ab omnis aut quod adipisci! Magni exercitationem numquam sed voluptate sint dignissimos ullam provident? Error, earum impedit delectus iure quisquam exercitationem totam deleniti neque itaque excepturi doloribus sequi aliquam necessitatibus. Blanditiis illo, tempore ratione hic et ad suscipit, maiores modi ipsam fuga mollitia architecto! Magni nihil eveniet repellat mollitia esse, laborum modi dicta cupiditate fugit id voluptatum, dolor, optio assumenda fugiat maiores quas temporibus? Temporibus explicabo itaque nesciunt exercitationem perferendis velit necessitatibus unde? Rem quae eum dolore assumenda officia sunt repellat eius iusto magnam commodi optio delectus voluptas, praesentium asperiores nam blanditiis. Nemo impedit, modi assumenda recusandae delectus deleniti ut. Ut doloribus molestias soluta dolor minima nesciunt eaque, porro praesentium necessitatibus rerum error. A tenetur laudantium alias excepturi autem quis optio cupiditate, nesciunt velit quidem maiores dignissimos delectus cum nam ipsum obcaecati iusto ducimus rem totam dolor corrupti? Qui, atque? Cum ipsam vero omnis autem et tempora sit voluptate nemo ab distinctio? Dolorem illo eius laborum iure sunt veniam ex distinctio quidem nostrum impedit nulla incidunt autem deserunt voluptatibus, optio eveniet ratione sed explicabo fuga dignissimos vero voluptas sapiente consequuntur. Quidem temporibus voluptatum esse magnam magni, placeat reprehenderit rem quisquam consectetur numquam nemo repellat. Aperiam dolore quasi illo sint. Incidunt amet veritatis vitae beatae quas ullam praesentium aspernatur, non possimus sint totam accusantium aliquam nesciunt soluta quasi odit maiores perspiciatis temporibus quidem cupiditate. Non tempore, exercitationem maxime quidem doloremque qui nisi consequatur dignissimos fugiat provident harum sequi, minima, animi nam aut vitae beatae rerum eaque officia et ipsa!</p>    
            </>         
        </div>
    )
}

export default Home3;