import Typewriter from 'typewriter-effect';

function Home()
{    
    return(
        <div className='home-page page' id="home">
            <Typewriter
                options={{
                strings: ['<code>[LOADING]...Mood</code>'],
                autoStart: true,
                loop: true,
            }}
            />            
        </div>

    );
}

export default Home;