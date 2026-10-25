# 프루드수 계산기

자유수면 흐름에서 관성과 중력파 속도의 관계를 프루드수로 계산합니다. 수리수심은 유수면적을 수면폭으로 나눈 값입니다.

- ID: E131
- App: https://nanalab.kr/eng-froude-number/
- Repository: https://github.com/NaNaCompany/eng-froude-number
- Formula: Fr = V / √(gD), D = A/T

## Model and data

정수압에 가까운 압력분포를 가진 단면 평균 자유수면 흐름입니다. 수리수심 D = A/T를 사용합니다. 수리반경 A/윤변을 대신 넣지 않습니다. Fr은 흐름 상태의 지표이며, 수로 전체의 홍수나 도수 위치를 예측하지 않습니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
