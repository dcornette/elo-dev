import { Flex } from '../../styled-system/jsx';
import { css } from '../../styled-system/css';
import MainRating from './MainRating';
import { JOBS } from '../data/jobs';
import { Job } from '../interfaces/rating';
import MainJobRating from './MainJobRating';

const main = css({
    display: 'flex',
    pt: '10'
});

const resumeList = css({
    w: '45%',
});

export default function Dashboard() {
    return (
        <main className={main}>
            <Flex direction="row" justify="space-between" className={css({ w: '100%' })}>
                <MainRating title="Job">
                    {JOBS.map((job: Job) => {
                        return <MainJobRating key={job.position} job={job} />;
                    })}
                </MainRating>
                <section className={resumeList}>
                    <h1>Technologie</h1>
                    <ul>
                        <li>React</li>
                        <li>Python</li>
                        <li>Symfony</li>
                        <li>TypeScript</li>
                        <li>Node.js</li>
                    </ul>
                </section>
            </Flex>
        </main>
    );
}