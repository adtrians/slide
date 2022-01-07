// 💡 Looking for a pure CSS Version? ~> https://codepen.io/bramus/pen/xxRZZdK 

// Polyfill for browsers with no Scroll-Timeline support
import 'https://rawcdn.githack.com/flackr/scroll-timeline/94866999efe41b3ccba846be7ed37c9313dd880e/dist/scroll-timeline.js';

const $ul = document.querySelector('ul');
const $lis = document.querySelectorAll('ul > li');

$lis.forEach(($li) => {

	$li.style.perspective = '40em';
	$li.style.position = 'relative';

	// Create ScrollTimeline
	const scrollTimeline = new ScrollTimeline({
		scrollSource: $ul,
		timeRange: 1,
		orientation: 'inline',
		fill: 'both',
		scrollOffsets: [
			{ target: $li, edge: 'end', threshold: 0 },
			{ target: $li, edge: 'start', threshold: 0 },
		],
	});

	// Animate <li>
	new Animation(
		new KeyframeEffect(
			$li,
			{
				zIndex: ["1", "100", "1000", "100", "1"],
			},
			{ duration: 1, fill: "both" }
		),
		scrollTimeline
	).play();

	// Animate nested <img>
	new Animation(
		new KeyframeEffect(
			$li.querySelector('img'),
			{
				transform: [
					'rotateY(-45deg) translateX(-100%)',
					'rotateY(-45deg) translateX(0)',
					'rotateY(0deg) translateZ(1em) scale(1.5)',
					'rotateY(45deg) translateX(0)',
					'rotateY(45deg) translateX(100%)',
				],
			},
			{ duration: 1, fill: "both" }
		),
		scrollTimeline
	).play();

});