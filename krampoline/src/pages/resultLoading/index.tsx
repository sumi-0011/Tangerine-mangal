import styled from 'styled-components';

import Character from './Character';

function ResultLoadingPage() {
  return (
    <Container>
      <Character />
      <HeadingContainer>
        <h1 className="b-24">내가 그물망을 만들어 올게!.</h1>
        <h1 className="b-24">잠깐만 기다려줘</h1>
      </HeadingContainer>
      <div>
        <p className="r-14">기다리는 동안</p>
        <p className="r-14">
          <strong className="b-14">아름다운 노을</strong>을 구경해보는건 어때?
        </p>
      </div>
    </Container>
  );
}

export default ResultLoadingPage;

const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  flex-direction: column;
`;
