import apprenticeships_img1 from '../images/apprenticeships1.jpg';
import apprenticeships_img2 from '../images/apprenticeships2.jpg';

const Apprenticeships = () => {
    return (
        <main className="apprenticeships--container">
            <h1 className="apprenticeships--h1">Apprenticeships at Ableton</h1>
            <h2 className="apprenticeships--h2">What are they and what do you need to get started?</h2>
            <p className="apprenticeships--p">Dual apprenticeship programs have a long tradition in Germany, and they play an important role in the country’s economy. The programs are a proven stepping stone towards a meaningful career without the need for a university degree. They give you the chance to apply theoretical knowledge learned in a vocational school to tasks in the workplace, while you divide your time between class and office days.</p>
            <img className="apprenticeships--img" src={apprenticeships_img1} alt=""/>
            <p className="apprenticeships--p">At Ableton, you'll work towards the Office Management Assistant apprenticeship over two and a half years, developing your professional and personal skills in different teams. We look for people who are highly motivated to work in a commercial office environment, with an excellent level of German and very good English. It’s important that you’re eager to learn, organized in your work, and communicative when collaborating with others. Plus, you should be ready to get the most out of your development through giving and receiving feedback. You can expect a relaxed, professional atmosphere with a dynamic team of people who love music in return.</p>
            <p className="apprenticeships--p">If this sounds like you, feel free to have a look at our detailed information in German <a href="http://ableton.com/de/ausbildung">here</a>. And please share this page with anyone who might be interested to help us find our future colleagues!</p>
            <img className="apprenticeships--img" src={apprenticeships_img2} alt=""/>
        </main>
    )
}

export default Apprenticeships;