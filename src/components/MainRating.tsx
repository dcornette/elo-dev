import { css } from '../../styled-system/css';
import { Heading } from './ui/heading';

const resumeList = css({
    w: '45%',
});

const MainRating: React.FunctionComponent<{ title: string, children?: React.ReactNode }> = ({ title, children }) => {
    return (
        <section className={resumeList}>
            <Heading as="h1" size="4xl" className={css({ pb: '4' })}>↪ {title}</Heading>
            <ul>
                {children}
            </ul>
        </section>
    );
}

export default MainRating;