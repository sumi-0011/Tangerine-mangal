import styled from 'styled-components';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function QuestionInputItem({ value, onChange }: Props) {
  return (
    <Container
      className="b-20"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="내용을 입력해주세요"
    />
  );
}

export default QuestionInputItem;

const Container = styled.input`
  padding: 20px 66px 20px 24px;
  border-radius: 10px 10px 30px 10px;
  border: 1px solid var(--color-primary-orange-2, #b38800);

  &::placeholder {
    color: #858899;

    font-size: 16px;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
`;
