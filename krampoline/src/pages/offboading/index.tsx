import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import BusProgress from './bus-progress.svg';

function OffBoardingPage() {
  return (
    <div>
      <Container>
        <TopContainer className="r-16">
          <p>제주도를 감동시킨</p>
          <p>청결, 가격, 종업원의 친절도가 보장된</p>
        </TopContainer>
        <Heading>
          <h1 className="r-16">
            <strong className="eb-24">성산 해오름 식당</strong>
            으로 안내할게
          </h1>
          <p className="r-14">제주시, 성산읍 일출로 260</p>
        </Heading>
        <BusBox>
          <img src={BusProgress} alt="bus progress" />
          <section>
            <div>
              <p>현재 위치</p>
              <span>도보 5분</span>
            </div>
            <div>
              <p>고성리제주은행[남] 정류장</p>
              <div>
                <div>
                  <span>2011 버스</span>
                  <span>11분 후 도착</span>
                </div>
                <Divider />
                <div>
                  <span>295 버스</span>
                  <span>23분 후 도착</span>
                </div>
              </div>
            </div>
            <div>
              <p>성산 해오름 식당</p>
              <span>도보 4분</span>
            </div>
          </section>
        </BusBox>
        <RecommendTime>
          <h2 className="b-20">5분 안에 출발하는 걸 추천해</h2>
          <p className="r-12">오후 1시 36분 기준</p>
        </RecommendTime>

        <ButtonContainer>
          <Link to={'#'}>
            <Button className="b-16">지도 바로가기</Button>
          </Link>
          <Link to={'#'}>
            <Button className="b-16">길 찾기 바로가기</Button>
          </Link>
        </ButtonContainer>
      </Container>
    </div>
  );
}

export default OffBoardingPage;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 47px;
  gap: 29px;
`;
const Button = styled.button`
  height: 52px;
  padding: 14px 24px;
  border-radius: 8px;
  background: #ffe280;
  border: none;
  font-size: 16px;
`;
const Container = styled.div`
  padding: 0 29px;
`;

const RecommendTime = styled.div`
  text-align: end;
  h2 {
    margin-bottom: 6px;
  }
`;

const TopContainer = styled.div`
  margin-top: 50px;
`;

const Heading = styled.h1`
  h1 {
    margin-top: 40px;
    margin-bottom: 19px;
    strong {
      font-weight: 700;
      margin-right: 10px;
    }
  }
  margin-bottom: 51px;
`;

const BusBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 332px;
  padding: 44px 20px 27px 31px;
  justify-content: space-around;
  align-items: center;
  display: flex;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-bottom: 40px;
  & > section {
    & > div:nth-child(1) {
      position: relative;
      top: -8px;
    }
    & > div:nth-child(2) {
      margin-top: 32px;
      margin-bottom: 61px;
      p {
        margin-bottom: 19px;
      }
      & > div {
        display: flex;
        justify-content: space-between;
        gap: 15.5px;
        & > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
    & > div:nth-child(3) {
      position: relative;
      bottom: -8px;
    }
  }
`;

const Divider = () => {
  return (
    <svg
      width="1"
      height="29"
      viewBox="0 0 1 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.5 0.5V28.5" stroke="black" />
    </svg>
  );
};
