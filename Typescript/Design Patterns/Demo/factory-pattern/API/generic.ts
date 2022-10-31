export interface IGenAPI {
  url?: string;
}

class GenericAPI {
  url?: string;
  constructor(arg: IGenAPI) {
    this.url = arg?.url ?? "";
  }
  create = (data: any) => {
    if (data) {
      console.log(`Call API ${this.url} to Create new record`);
    }
  };
  list = () => {
    console.log(`Call API ${this.url} to get list`);
  };
  update(id: string, data: any) {
    if (id && data) {
      console.log(`Call API ${this.url} to update record ${id}`);
    }
  }
  delete(id: string) {
    if (id) {
      console.log(`Call API ${this.url} to delete record ${id}`);
    }
  }
  getOne(id: string) {
    if (id) {
      console.log(`Call API ${this.url} to get record ${id}`);
    }
  }
}

export default GenericAPI;
