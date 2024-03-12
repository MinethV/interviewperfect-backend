from setuptools import setup, find_packages

setup(
    name='interviewperfect',
    version='0.1',
    packages=find_packages(),
    install_requires=[
        'fastapi[all]==0.109.0',
        'pydantic-settings',
        'python-dotenv',
        'motor',
        'requests',
    ],
)
