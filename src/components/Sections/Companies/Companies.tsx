import companies from "./companies-data";
import Company from "./Company";

const Companies = () => {
  return (
    <div className="companies">
      <div className="container">
        <div className="companies__wrap">
          <div className="companies__title">Trusted more than 150+ brand</div>
          <div className="companies__list">
            {companies.map((company) => {
              return <Company {...company} key={company.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
