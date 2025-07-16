const GenderCheckbox = () => {
  return (
    <div className="flex gap-6 my-2">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer text-white">
          <span className="label-text text-white">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-success border-white/30"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer text-white">
          <span className="label-text text-white">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-success border-white/30"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
