type TOptionProps = {
  value: string;
};

const Option = ({ value }: TOptionProps) => {
  return (
    <option value={value}>{value[0].toUpperCase() + value.substring(1)}</option>
  );
};

export default Option;
