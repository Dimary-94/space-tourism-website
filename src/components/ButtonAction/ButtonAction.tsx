import * as S from './styled';

export type ButtonActionProps = {
  text?: string;
  id: string;
  value?: number;
  disabled?: boolean;
  className?: string;
  handler: (id: string) => void;
};

const ButtonAction = ({
  text,
  id,
  value,
  disabled,
  className,
  handler,
}: ButtonActionProps) => {
  const handleButtonClick = (buttonId: string) => (e: { stopPropagation: () => void; }) => {
    if (e) {
      e.stopPropagation?.();
    }
    handler(buttonId);
  };

  return (
    <S.Button
      key={id}
      {...{ className, value, disabled }}
      onClick={handleButtonClick(id)}
    >
      {text}
    </S.Button>
  );

};

export default ButtonAction;
