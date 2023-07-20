import JobListing from "./JobListing";

const Jobs = () => {
    return (
        <main className="jobs--container">
            <div className="jobs--heading--container">
                <h1 className="jobs--heading">Jobs at Ableton</h1>
            </div>
            <h2 className="jobs--h2">Working at Ableton means being a part of creating products that shape the future of music culture in a dynamic and diverse environment</h2>
            <p className="jobs--p">Here at Ableton, we come from a wide range of cultural and professional backgrounds. We work hard to foster an environment in which people can grow both personally and professionally. We believe that diverse groups of people make better teams. We’re committed to increasing diversity in our workplace and providing equal opportunity throughout our recruitment process. Because of this we ask that you do not include a picture in your application documents. Thank you very much for your understanding.</p>
            <p className="jobs--p">If you want to apply for one of our open positions, we would be happy to receive your application through our application form. Please upload all necessary documents there.</p>
            <div className="jobs--job--listing--container">
                <ul className="job--listing--ul">
                    <li className="job--listing--ul--heading">Commerce</li>
                    <JobListing href="https://www.ableton.com/en/jobs/apply/686604" jobTitle="Ableton Brand Manager - Nordics (d/f/m) &gt; " jobLocation="Ableton AG / Germany"/>
                    <JobListing href="https://www.ableton.com/en/jobs/apply/453495" jobTitle="Global Head of Tax (d/f/m) &gt;" jobLocation="Ableton AG / Germany"/>
                    <JobListing href="https://www.ableton.com/en/jobs/apply/620249" jobTitle="Interior Designer (d/f/m) &gt;" jobLocation="Ableton AG / Germany"/>
                    <JobListing href="https://www.ableton.com/en/jobs/apply/688856" jobTitle="Local Brand Manager Canada (d/f/m) &gt;" jobLocation="Ableton AG / Canda"/>
                    <JobListing href="https://www.ableton.com/en/jobs/apply/700743" jobTitle="Software Portfolio Manager (d/f/m) &gt;" jobLocation="Ableton AG / Germany"/>
                    <JobListing href="https://www.ableton.com/de/jobs/apply/368493" jobTitle="Assistenz in der Rechtsabteilung / Paralegal (d/f/m) &gt;" jobLocation="Ableton AG / Germany"/>
                    <JobListing href="https://www.ableton.com/de/jobs/apply/62213" jobTitle="Referendar:in für die Wahlstation bzw. als Teil der Anwaltsstation (d/w/m) &gt;" jobLocation="Ableton AG / Germany"/>
                    <JobListing href="https://www.ableton.com/de/jobs/apply/545769" jobTitle="Senior Legal Counsel (d/w/m) &gt;" jobLocation="Ableton AG / Germany"/>
                </ul>
                <ul className="job--listing--ul">
                    <li className="job--listing--ul--heading">Product Development</li>
                    <li><a className="job--listing--link" href="https://www.ableton.com/en/jobs/apply/698090"><span className="job--title">QA Engineer, Hardware (d/f/m) &gt;</span><span className="job--location">Ableton AG / Germany</span></a></li>
                    <li><a className="job--listing--link" href="https://www.ableton.com/en/jobs/apply/639242"><span className="job--title">Release Engineer (d/f/m) &gt;</span><span className="job--location">Ableton AG / Germany</span></a></li>
                </ul>
            </div>

        </main>
    )
}

export default Jobs;