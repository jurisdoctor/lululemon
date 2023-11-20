import './Table.styles.css';

import { AppState, BirthType } from '../../store/wiki/types';

import { useSelector } from 'react-redux';

const Table = () => {
  const { births } = useSelector((state: AppState) => state.wiki);

  const renderTable = () => {
    if (births?.length > 0) {
      return (
        <div className="table">
          <table data-testid="table-main">
            <caption data-testid="table-caption">
              On this day... these awesome people were born!
            </caption>
            <thead data-testid="table-header">
              <tr data-testid="table-header-row">
                <th>Year</th>
                <th>Name</th>
                <th>Who?</th>
              </tr>
            </thead>
            <tbody data-testid="table-body">
              {births.map((birth: BirthType, index: number) => {
                const { text, year } = birth;
                const [name, about] = text.split(',');

                return (
                  <tr key={index} data-testid={`table-body-row-${index}`}>
                    <td>{year}</td>
                    <td>{name}</td>
                    <td>{about}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return <>{renderTable()}</>;
};

export default Table;
