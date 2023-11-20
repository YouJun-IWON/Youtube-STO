const Rule = () => {
  return (
    <section>
      <div className='py-10'>
        <div className='max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400'>
          <h2 className='mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white'>
            참여규정
          </h2>
          <ul className='my-2 ml-6 text-sm leading-4  list-decimal [&>li]:mt-2'>
            <li>
              구매 및 판매금액 거래수수료는 1주당 1.0%이며, 소수점 이하는
              절사합니다. 단, 5주 이상 구매주문 시 거래수수료는 0.8%로
              감면됩니다.
            </li>
            <li>
              구매 주문 시 구매하신 가격 대비 과거 1년 수익률을 반드시 확인
              바랍니다.
            </li>
            <li>
              구매 체결 시 ‘내 지갑’에서 거래수수료를 포함한 결제금액이 자동
              결제됩니다.
            </li>
            <li>
              판매 체결 시 ‘내 지갑’에서 거래수수료를 포함한 판매금액이 자동
              합산됩니다.
            </li>
            <li>
              구매주문금액의 100%가 대기금으로 설정되며, 주문취소 시 해당
              대기금이 해제됩니다.
            </li>
            <li>
              과거 저작권료 수익률은 구매가 대비 과거 1년 저작권료입니다. 1년
              미만의 자료만 존재할 경우, 연으로 환산됩니다.
            </li>
            <li>
              수익증권 판매 시 판매차익이 발생할 경우 배당소득으로 분류되어,
              15.4% (지방소득세 포함)의 원천징수금액이 공제된 후 지급됩니다. 단,
              배당소득세액이 1,000원 미만일 경우 과세되지 않습니다.
            </li>
            <li>
              모든 투자의 결정 및 최종 책임은 고객 본인에게 있으며, 미래의 증권
              손실 및 손해에 대해 당사에서는 어떠한 책임도 지지 않습니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Rule;
