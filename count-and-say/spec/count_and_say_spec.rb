require_relative '../../spec/spec_helper'
require_relative '../count_and_say'

describe CountAndSay do
  let(:instance) { described_class.new }

  describe '#sequence_member' do
    subject { instance.sequence_member(n) }

    context 'first in sequence' do
      let(:n) { 1 }

      it 'returns the first sequence member' do
        expect(subject).to eq('1')
      end
    end

    context 'second in sequence' do
      let(:n) { 2 }

      it 'returns the second sequence member' do
        expect(subject).to eq('11')
      end
    end

    context 'third in sequence' do
      let(:n) { 3 }

      it 'returns the third sequence member' do
        expect(subject).to eq('21')
      end
    end

    context 'fourth in sequence' do
      let(:n) { 4 }

      it 'returns the fourth sequence member' do
        expect(subject).to eq('1211')
      end
    end

    context 'fifth in sequence' do
      let(:n) { 5 }

      it 'returns the fifth sequence member' do
        expect(subject).to eq('111221')
      end
    end
  end
end
