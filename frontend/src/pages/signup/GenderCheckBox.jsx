const GenderCheckbox = ({onCheckboxChange ,selectedGender} ) => {
  return (
    <div className="flex gap-6 my-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer text-white ${selectedGender ==="male" ?"selected" : ""}`}>
          <span className="label-text text-white">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-success border-white/30"
          checked = {selectedGender ==='male'}
          onChange={()=> onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer text-white ${selectedGender ==="female" ?"selected" : ""}`}>
          <span className="label-text text-white">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-success border-white/30"
           checked = {selectedGender ==='female'}
          onChange={()=> onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
