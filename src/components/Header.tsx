import { Flex } from '../../styled-system/jsx';
import { css } from '../../styled-system/css';
import { Button } from './ui/button';

const header = css({
    display: 'flex',
    height: '20',
});

export default function Header() {
    return (
        <header className={header}>
            <Flex direction="row" justify="space-between" align="center" className={css({ w: '100%' })}>
                <Flex direction="row" align="baseline">
                    <a href='#' className={css({ fontSize: '4xl' })}>EloDev</a>
                    <nav className={css({ ml: '10' })}>
                        <a href="#" className={css({ fontWeight: 500 })}>Dashboard</a>
                    </nav>
                </Flex>
                <Button variant="solid">Se connecter</Button>
            </Flex>
        </header>
    );
}