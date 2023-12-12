import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons';

export const labels = [
  {
    value: 'bj',
    label: 'BJ ∙ 크리에이터',
  },
  {
    value: 'health',
    label: '헬스 ∙ 피트니스',
  },
  {
    value: 'music',
    label: '음악 ∙ 댄스',
  },
  {
    value: 'tv',
    label: 'TV ∙ 방송',
  },
  {
    value: 'kids',
    label: '키즈 ∙ 애니',
  },
  {
    value: 'asmr',
    label: '먹방 ∙ ASMR',
  },
  {
    value: 'movie',
    label: '영화 ∙ 비디오',
  },
  {
    value: 'enter',
    label: '엔터테인먼트',
  },
  {
    value: 'food',
    label: '음식 ∙ 요리',
  },
  {
    value: 'policy',
    label: '정치 ∙ 사회 ∙ 경제',
  },
];

export const statuses = [
  {
    value: 'Ready',
    label: '판매 대기',
    icon: QuestionMarkCircledIcon,
  },
  {
    value: 'Sale',
    label: '판매 중',
    icon: CircleIcon,
  },
  {
    value: 'Ended',
    label: '판매 중지',
    icon: CrossCircledIcon,
  },
];

export const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: ArrowDownIcon,
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: ArrowRightIcon,
  },
  {
    label: 'High',
    value: 'high',
    icon: ArrowUpIcon,
  },
];
