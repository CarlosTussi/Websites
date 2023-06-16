import Typewriter from 'typewriter-effect';

function Home()
{
    return(
        <div className='home-page page'>
            <Typewriter
                options={{
                strings: ['<code>[LOADING]<br>Mood</code>'],
                autoStart: true,
                loop: true,
            }}
            />
        </div>

    );
}

export default Home;