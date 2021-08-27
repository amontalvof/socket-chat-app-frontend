import { animateScroll } from 'react-scroll';

export const scrollToBottom = ({ htmlId, duration }) => {
    animateScroll.scrollToBottom({
        containerId: htmlId,
        duration,
    });
};
