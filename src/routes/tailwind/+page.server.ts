import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const {
		paraglide: { lang }
	} = locals;

	// test
	return {
		research: research[lang as keyof typeof research],
		insights: insights[lang as keyof typeof insights]
	};
};

type Article = {
	id: number;
	title: string;
	description?: string;
	tags: string[];
	postedOn: string;
};

// test
type Articles = {
	[lang: string]: Article[];
};

const research: Articles = {
	en: [
		{
			id: 1,
			title:
				"High and dry:The global energy transition's looming impact on the LNG and oil shipbuilding industry",
			tags: ['Report', 'Public Finance', 'Private Finance'],
			postedOn: '2023-09-23T00:37:18Z'
		},
		{
			id: 2,
			title: 'Global trends in climate change litigation 2022',
			tags: ['Gas', 'Hydrogen'],
			postedOn: '2023-09-23T00:37:18Z'
		},
		{
			id: 3,
			title: 'Offshore Wind Colloquium Brief No.1 - UK case of Fisheries Engagement',
			tags: [],
			postedOn: '2023-09-23T00:37:18Z'
		}
	],
	ko: [
		{
			id: 1,
			title: '고도 및 건조: 글로벌 에너지 전환이 LNG 및 석유 조선 산업에 미치는 영향',
			tags: ['신고', '공공재정', '민간재정'],
			postedOn: '2023-09-23T00:37:18Z'
		},
		{
			id: 2,
			title: '기후변화 소송의 글로벌 동향 2022',
			tags: ['가스', '수소'],
			postedOn: '2023-09-23T00:37:18Z'
		},
		{
			id: 3,
			title: '해상풍력 콜로키움 브리핑 No.1 - 영국 수산업 참여 사례',
			tags: [],
			postedOn: '2023-09-23T00:37:18Z'
		}
	]
};

const insights: Articles = {
	en: [
		{
			id: 1,
			title: 'The Grand Escape Rush of Climate Neglect Festivals',
			description: 'Desert Turned Mud Puddle in Heavy Rainfall',
			tags: ['Coal', 'Gas', 'Solar'],
			postedOn: '2023-09-23T00:37:18Z'
		},
		{
			id: 2,
			title: 'The Victory of Future Generations for Climate',
			description:
				'The Right to Live in a Clean Environment The Right to Live in a Clean Environment ',
			tags: ['Coal', 'Gas'],
			postedOn: '2023-09-23T00:37:18Z'
		},
		{
			id: 1,
			title: 'The World is Set to Melt',
			description: 'Siberia at 40°C? Approaching Heatwave GOAT',
			tags: ['Coal', 'Gas', 'Solar'],
			postedOn: '2023-09-23T00:37:18Z'
		}
	],
	ko: [
		{
			id: 1,
			title: '기후 방치 축제의 대탈출 러시',
			description: '폭우로 인해 사막이 진흙 웅덩이로 변했습니다',
			tags: ['석탄', '가스', '태양광'],
			postedOn: '2023-09-23T00:37:18Z'
		},
		{
			id: 2,
			title: '기후를 위한 미래 세대의 승리',
			description: '깨끗한 환경에서 살아갈 권리 깨끗한 환경에서 살아갈 권리',
			tags: ['석탄', '가스'],
			postedOn: '2023-09-23T00:37:18Z'
		},
		{
			id: 3,
			title: '세상이 녹을 것 같다',
			description: '시베리아의 기온이 40°C라고요? 폭염 GOAT에 접근',
			tags: ['석탄', '가스', '태양광'],
			postedOn: '2023-09-23T00:37:18Z'
		}
	]
};
