from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    DB_HOST: str
    DB_USER: str
    DB_PASSWORD: str

    model_config = SettingsConfigDict(env_file=".env")


@lru_cache
def get_settings():
    return Settings()