import { css } from '../../styled-system/css';
import { Box, Flex, HStack, VStack } from '../../styled-system/jsx';
import { MainJobRatingProps } from '../interfaces/rating';
import { Badge, type BadgeProps } from '~/components/ui/badge';

const rating = css({
    fontSize: '3xl',
    lineHeight: '3',
    color: 'black.a11',
    pr: '2'
});

const title = css({
    fontSize: '3xl',
    fontWeight: 'bold',
    lineHeight: '1', 
    color: 'black.a11',
});

const ratingBox = css({
    border: "3px solid black", 
    rounded: '2xl', 
    boxShadow: '4px 4px 0 0',
    bgColor: 'accent.5'
});

export default function MainJobRating({ job }: MainJobRatingProps) {
    return (
        <li className={css({ mb: '3' })}>
            <Flex direction="row" justifyContent="space-between" gap="6">
                <code className={css({ fontSize: '3xl', lineHeight: '3', color: 'slategray' })}>#{job.position}</code>
                <Flex 
                    grow="4" 
                    direction="row" 
                    justifyContent="space-between" 
                    gap="6" 
                    align="left" 
                    className={ratingBox}>
                    <VStack alignItems="flex-start" className={css({ w: 'full', p: '2' })}>
                        <span className={title}>{job.title}</span>
                        <Badge size={'lg'} variant={'subtle'}>Park UI</Badge>
                    </VStack>
                    <span className={rating}>{job.elorating}</span>
                </Flex>
            </Flex>
        </li>
    );
}