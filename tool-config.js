export const tool={
  "category": "유체역학",
  "category_en": "Fluid mechanics",
  "id": "E131",
  "slug": "eng-froude-number",
  "title": "프루드수 계산기",
  "title_en": "Froude Number Calculator",
  "fields": [
    {
      "key": "v",
      "label": "단면 평균 유속",
      "label_en": "Section-mean speed",
      "dimension": "speed",
      "example": 2,
      "constraint": "nonnegative",
      "display_unit": "ms",
      "display_value": "2"
    },
    {
      "key": "depth",
      "label": "수리수심 D = 유수면적 A / 수면폭 T",
      "label_en": "Hydraulic depth D = flow area A / top width T",
      "dimension": "length",
      "example": 0.5,
      "constraint": "positive",
      "display_unit": "m",
      "display_value": "0.5"
    },
    {
      "key": "g",
      "label": "중력가속도",
      "label_en": "Gravitational acceleration",
      "dimension": "acceleration",
      "example": 9.80665,
      "constraint": "positive",
      "display_unit": "ms2",
      "display_value": "9.8066499999999994"
    }
  ],
  "result_label": "프루드수 Fr",
  "result_label_en": "Froude number Fr",
  "result_dimension": "ratio",
  "formula": "Fr = V / √(gD), D = A/T",
  "purpose": "자유수면 흐름에서 관성과 중력파 속도의 관계를 프루드수로 계산합니다. 수리수심은 유수면적을 수면폭으로 나눈 값입니다.",
  "purpose_en": "Calculate the Froude number for open-channel flow using the section-mean speed and hydraulic depth, defined as flow area divided by free-surface top width.",
  "assumptions": "정수압에 가까운 압력분포를 가진 단면 평균 자유수면 흐름입니다. 수리수심 D = A/T를 사용합니다. 수리반경 A/윤변을 대신 넣지 않습니다. Fr은 흐름 상태의 지표이며, 수로 전체의 홍수나 도수 위치를 예측하지 않습니다.",
  "assumptions_en": "Required: section-mean open-channel flow with approximately hydrostatic pressure. Use hydraulic depth D = A/T, with free-surface top width T. Excluded: substituting hydraulic radius A/wetted perimeter or predicting flooding and jump location from Fr alone.",
  "sources": [
    {
      "label": "TxDOT Hydraulic Design Manual · Froude number and hydraulic mean depth",
      "url": "https://www.txdot.gov/content/txdotoms/us/en/manuals/des/hyd/chapter-6--hydraulic-principles/section-1--open-channel-flow/froude-number.html"
    }
  ],
  "condition": "수리수심 A/T와 자유수면 단면 평균 모델을 확인했습니다.",
  "condition_en": "I confirmed hydraulic depth A/T and the section-mean open-channel model.",
  "site": "https://nanalab.kr/eng-froude-number/",
  "repository": "https://github.com/NaNaCompany/eng-froude-number",
  "groups": [],
  "output_unit": "1"
};
