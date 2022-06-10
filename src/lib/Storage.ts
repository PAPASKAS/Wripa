import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { ITheme } from '@src/interfaces';

type keyType = '@theme' | '@test';
type valueType = ITheme;

export default class Storage {
  AsyncStorage: AsyncStorageHook;

  public constructor(key: keyType) {
    this.AsyncStorage = useAsyncStorage(key);
  };

  public async get<T>(): Promise<T | null> {
    return this.AsyncStorage.getItem()
      .then((res: string | null) => {
        if (res) {
          const value: T = JSON.parse(res);
          return value;
        }
        return null;
      });
  };

  public async set(value: string | valueType): Promise<void> {
    await this.AsyncStorage.setItem(JSON.stringify(value));
  };

  public async remove(): Promise<void> {
    await this.AsyncStorage.removeItem();
  };

  public async merge(): Promise<void> {
    const last = await this.get();
  };
};
